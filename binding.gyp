{
  'variables': {
    'module_name': 'node_libcurl',
    'module_path': '<(module_root_dir)/lib'
  },
  'targets': [
    {
      'target_name': 'node_libcurl',
      'type': 'loadable_module',
      'sources': [
        'src/node_libcurl.cc',
        'src/Easy.cc',
        'src/Share.cc',
        'src/Multi.cc',
        'src/Curl.cc',
        'src/CurlHttpPost.cc',
        'src/CurlVersionInfo.cc',
        'src/Http2PushFrameHeaders.cc',
      ],
      'include_dirs': [
        "<!(node -e \"require('nan')\")",
        "<!(node -p \"require('node-addon-api').include\")",
        "<(module_root_dir)/deps/curl-impersonate/build/curl-8.1.1/include"  # Use curl headers from build directory
      ],
      'conditions': [
        ['OS=="linux"', {
          'cflags!': ['-fno-exceptions'],
          'cflags_cc!': ['-fno-exceptions'],
          'cflags_cc': [
            '-std=c++17',
            '-Wno-narrowing'
          ],
          'defines': [
            'CURL_STATICLIB',
          ],
          'libraries': [
            '-L<(module_root_dir)/deps/curl-impersonate/build/dist/lib',
            '-lcurl-impersonate-ff',
            '-lssl',
            '-lcrypto',
            '-lnghttp2',
            '-lbrotlidec',
            '-lz'
          ]
        }]
      ]
    },
    {
      'target_name': 'action_after_build',
      'type': 'none',
      'dependencies': [ 'node_libcurl' ],
      'copies': [
        {
          'files': [ '<(PRODUCT_DIR)/node_libcurl.node' ],
          'destination': '<(module_path)'
        }
      ]
    }
  ]
}