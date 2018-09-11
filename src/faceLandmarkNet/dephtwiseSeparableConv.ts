import * as tf from '@tensorflow/tfjs-core';
import { SeparableConvParams } from 'tfjs-tiny-yolov2/build/tinyYolov2/types';

export function dephtwiseSeparableConv(x: tf.Tensor4D, params: SeparableConvParams, stride: [number, number]): tf.Tensor4D  {
  return tf.tidy(() => {
    let out = tf.separableConv2d(x, params.depthwise_filter, params.pointwise_filter, stride, 'valid')
    out = tf.add(out, params.bias)
    return tf.relu(out)
  })
}