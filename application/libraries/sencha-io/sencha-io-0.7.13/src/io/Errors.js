/**
 * Errors generated by the SDK
 *
 */
Ext.define('Ext.io.Errors', {
    statics: {

        /**
        *
        */
        'SERVICE_VERSION_UNKNOWN': {
            code: 'SERVICE_VERSION_UNKNOWN',
            message: "The SDK doesn't know which version of the service is to be used",
            kind: 'sio',
            suggest: 'If the service name is not misspelt, contact support@sencha.io'
        },

        /**
        *
        */
        'NETWORK_ERROR': {
            code: 'NETWORK_ERROR',
            message: 'The request could not be made due to the network being down',
            suggest: 'Check network connectivity from your device'
        },

        /**
        *
        */
        'WEBSOCKET_NOT_READY': {
            code: 'WEBSOCKET_NOT_READY',
            message: 'The request could not be made as the websocket is not ready yet',
            suggest: 'The websocket should connect automatically within some time'
        },

        /**
        *
        */
        'UNKNOWN_ERROR': {
            code: 'UNKNOWN_ERROR',
            message: 'Unknown error',
            kind: 'sio',
            suggest: 'Contact support@sencha.io with a description of what caused the error'
        },


        /**
        *
        */
        'UNKNOWN_RPC_ERROR': {
            code: 'UNKNOWN_RPC_ERROR',
            message: 'Unknown RPC error',
            kind: 'sio',
            suggest: 'Fix the RPC service to return a valid error object'
        },

        /**
        *
        */
        'PARAM_MISSING': {
            code: 'PARAM_MISSING',
            message: "Mandatory parameter ':name' is missing",
            kind: 'developer',
            suggest: 'Provide the required parameter during the method call'
        },

        /**
        *
        */
        'PARAMS_LENGTH_MISMATCH': {
            code: 'PARAMS_LENGTH_MISMATCH',
            message: 'The method was passed :actual params instead of the expected :expected',
            kind: 'developer',
            suggest: 'Check the number of parameters you are passing to the method'
        },

        /**
        *
        */
        'PARAM_TYPE_MISMATCH': {
            code: 'PARAM_TYPE_MISMATCH',
            message: "Parameter ':name' data type mismatch. Expected ':expected', actual ':actual'",
            kind: 'developer',
            suggest: 'Correct the data type of the parameter'
        },

        /**
        *
        */
        'RPC_PARAM_FUNCTION_ERROR': {
            code: 'RPC_PARAM_FUNCTION_ERROR',
            message: "Parameter number :index (:name) is a function, but only the first parameter must be a function",
            kind: 'developer',
            suggest: 'Ensure that only the first parameter is a function'
        },

        /**
        *
        */
        'RPC_TIMEOUT': {
            code: 'RPC_TIMEOUT',
            message: 'RPC request has timed out as there was no reply from the server',
            kind: 'developer',
            suggest: 'Check if this was caused by network connectivity issues. If not, the service might be down.' +
                ' Also, see documentation for Ext.Io.setup (rpcTimeoutDuration, rpcTimeoutCheckInterval) to configure the timeout check'
        },

        /**
        *
        */
        'AUTH_REQUIRED': {
            code: 'AUTH_REQUIRED',
            message: 'This request requires an authenticated :kind session',
            kind: 'developer',
            suggest: 'Retry the request with a valid session'
        },

        /**
        *
        */
        'CHANNEL_NAME_MISSING': {
            code: 'CHANNEL_NAME_MISSING',
            message: 'Channel name is missing',
            kind: 'developer',
            suggest: 'Provide the channel name'
        },

        /**
        *
        */
        'CHANNEL_APP_ID_MISSING': {
            code: 'CHANNEL_APP_ID_MISSING',
            message: 'Channel appId is missing',
            kind: 'sio',
            suggest: 'Potential bug in the SIO SDK, attempting to get a channel without an appId'
        },

        /**
        *
        */
        'SERVICE_NAME_MISSING': {
            code: 'SERVICE_NAME_MISSING',
            message: 'Service name is missing',
            kind: 'developer',
            suggest: 'Provide the service name'
        },

        /**
        *
        */
        'SERVICE_DESCRIPTOR_LOAD_ERROR': {
            code: 'SERVICE_DESCRIPTOR_LOAD_ERROR',
            message: 'Error loading service descriptor from the server',
            kind: 'developer',
            suggest: 'Service name is most likely misspelt. If not, contact support@sencha.io'
        },

        /**
        *
        */
        'MESSAGE_NOT_JSON': {
            code: 'MESSAGE_NOT_JSON',
            message: 'message is not a JSON object',
            kind: 'developer',
            suggest: 'Use a valid JSON object instead of basic data types'
        },

        /**
        *
        */
        'NO_APP_ID': {
            code: 'NO_APP_ID',
            message: 'App ID not found',
            kind: 'developer',
            suggest: 'Use a valid App ID'
        },

        /**
        *
        */
        'FILE_PARAMS_MISSING': {
            code: 'FILE_PARAMS_MISSING',
            message: 'File or data parameters are missing',
            kind: 'developer',
            suggest: 'File or data parameters are missing'
        },

        /**
        *
        */
        'DEVELOPER_NOT_LOGGED_IN': {
            code: 'DEVELOPER_NOT_LOGGED_IN',
            message: 'Developer is not logged in',
            kind: 'developer',
            suggest: 'Retry the request after Developer login'
        },

        /**
        *
        */
        'NO_DEVICE_ID': {
            code: 'NO_DEVICE_ID',
            message: 'Device ID not found',
            kind: 'sio',
            suggest: 'Might be a bug in device allocation'
        },

        /**
        *
        */
        'NO_CURRENT_USER': {
            code: 'NO_CURRENT_USER',
            message: 'User ID not found',
            kind: 'developer',
            suggest: 'Retry with a valid User ID'
        },

        /**
        *
        */
        'USER_NOT_AUTHENTICATED': {
            code: 'USER_NOT_AUTHENTICATED',
            message: 'User not authenticated',
            kind: 'developer',
            suggest: 'Retry the request after User login'
        },

        /**
        *
        */
        'PIC_OP_NOT_SUPPORTED': {
            code: 'PIC_OP_NOT_SUPPORTED',
            message: 'This class of object does not support picture operations',
            kind: 'developer',
            suggest: 'This class of object does not support picture operations'
        },

        /**
        *
        */
        'PUSH_NOTIFICATIONS_NOT_SUPPORTED': {
            code: 'PUSH_NOTIFICATIONS_NOT_SUPPORTED',
            message: 'Push Notifications are not supported in this execution environment',
            kind: 'developer',
            suggest: 'Try building this application as a Packaged ST2 + SIO iOS Application'
        },

        /**
        *
        */
        'UNABLE_READ_FILE': {
            code: 'UNABLE_READ_FILE',
            message: 'Unable to read selected file',
            kind: 'developer',
            suggest: 'File is not provided or your browser does not support this operation'
        }
    }
});