__author__ = "Mario Lukas"
__copyright__ = "Copyright 2017"
__license__ = "GPL v2"
__maintainer__ = "Mario Lukas"
__email__ = "info@mariolukas.de"

import os
import datetime
import logging
import struct
import numpy as np
from fabscan.FSConfig import ConfigInterface
from fabscan.lib.util.FSInject import inject

class PointCloudError(Exception):

    def __init__(self):
        Exception.__init__(self, "PointCloudError")


@inject(
    config=ConfigInterface
)
class FSPointCloud():

    def __init__(self, config, color=True):
        self.points = []
        self.texture = np.array([[],[],[]])
        self.file_name = None
        self._dir_name = None
        self.color = color
        self.config = config
        self._logger = logging.getLogger(__name__)

    def get_points(self):
        return self.points

    def append_points(self, points):
        self.points.append(points)

    def append_texture(self, texture):
        texture = np.array(texture)
        self.texture = np.hstack((self.texture, texture))

    def get_size(self):
        return len(self.points)

    def writeHeader(self):
        pass

    def writePointsToFile(self):
        pass

    def calculateNormals(self):
        pass

    def saveAsFile(self, filename, postfix=''):
        basedir = os.path.dirname(os.path.dirname(os.path.realpath(__file__)))
        self._dir_name = self.config.file.folders.scans+filename

        if(len(postfix) > 0):
            filename = filename + '_' + postfix

        try:
            if not os.path.exists(self._dir_name):
                 os.makedirs(self._dir_name)

            with open(self._dir_name +'/scan_' +filename + '.ply', 'wb') as f:
                self.save_scene_stream(f)

        except Exception as e:
            self._logger.error(e)

        del self.points[:]
        self.points = []

    def save_scene_stream(self, stream, binary=False):

        frame = "ply\n"
        if binary:
            frame += "format binary_little_endian 1.0\n"
        else:
            frame += "format ascii 1.0\n"
        frame += "comment Generated by FabScanPi software\n"
        frame += "element vertex {0}\n".format(str(self.get_size()))
        frame += "property float x\n"
        frame += "property float y\n"
        frame += "property float z\n"
        frame += "property uchar red\n"
        frame += "property uchar green\n"
        frame += "property uchar blue\n"
        frame += "element face 0\n"
        frame += "property list uchar int vertex_indices\n"
        frame += "end_header\n"
        stream.write(frame.encode(encoding='UTF-8'))

        if self.get_size() > 0:
            for point in self.points:
                x, y, z, r, g, b = point

                if binary:
                    frame = str(struct.pack("<fffBBB", x, y, z, int(r), int(g), int(b)))
                else:
                    frame = "{0} {1} {2} {3} {4} {5}\n".format(str(x), str(y), str(z), str(r), str(g), str(b))

                stream.write(frame.encode(encoding='UTF-8'))
