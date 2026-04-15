// OpenSIN SDK - Standalone SDK Package
// Part of OpenSIN AI Agent Framework
// See: https://github.com/OpenSIN-AI/opensin_sdk

/**
 * Main SDK entry point for OpenSIN.
 * This package provides the SDK interface for the OpenSIN agent framework.
 *
 * @package @opensin/sdk
 * @license MIT
 */

export const SDK_VERSION = '1.0.0';
export const FRAMEWORK_NAME = 'OpenSIN';

/**
 * OpenSIN SDK client interface
 */
export interface OpenSINSdkClient {
  version: string;
  framework: string;
}

/**
 * Create a new OpenSIN SDK client
 */
export function createSdkClient(): OpenSINSdkClient {
  return {
    version: SDK_VERSION,
    framework: FRAMEWORK_NAME,
  };
}

export default { createSdkClient, SDK_VERSION, FRAMEWORK_NAME };