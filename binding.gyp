{
  'variables': {
    'module_name': 'node_libcurl',
    'module_path': '<(module_root_dir)/lib',
    'deps_dir': '<(module_root_dir)/deps/curl-impersonate/build/dist',
    'curl_config_bin': '<!(node -e "const browser = process.env.npm_config_browser || \'ff\'; const path = require(\'path\'); console.log(path.join(process.env.MODULE_ROOT_DIR || process.cwd(), \'deps/curl-impersonate/build/dist/bin/curl-impersonate-\' + browser + \'-config\'))")'
  },
  'targets': [
    {
      'target_name': '<(module_name)',
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
        "<!(node -p \"require('node-addon-api').include\")",
        "<!(node -e \"require('nan')\")", 
        "<(module_root_dir)/deps/curl-impersonate/build/curl-8.1.1/include"
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
            '<!@(<(curl_config_bin) --static-libs)',
          ]
        }]
      ]
    },
    {
      'target_name': 'action_after_build',
      'type': 'none',
      'dependencies': [ '<(module_name)' ],
      'copies': [
        {
          'files': [ '<(PRODUCT_DIR)/<(module_name).node' ],
          'destination': '<(module_path)'
        }
      ]
    }
  ]
}