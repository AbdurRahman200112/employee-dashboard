<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://127.0.0.1:8000/'], // Your live domain
    'allowed_headers' => ['*'],
    'supports_credentials' => true,
];
