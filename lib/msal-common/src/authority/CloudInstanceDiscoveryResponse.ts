/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { CloudDiscoveryMetadata } from "./CloudDiscoveryMetadata";

/**
 * The OpenID Configuration Endpoint Response type. Used by the authority class to get relevant OAuth endpoints.
 */
export type CloudInstanceDiscoveryResponse = {
    tenant_discovery_endpoint: string;
    metadata: Array<CloudDiscoveryMetadata>;
};
