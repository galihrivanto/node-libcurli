{
  'variables': {
    'module_name': 'node_libcurl',
    'deps_dir': '<(module_root_dir)/deps/curl-impersonate/build',
    'binary_root_dir': '<(module_path)'
  },
  'targets': [
    {
      'target_name': '<(module_name)_ff',
      'type': 'loadable_module',
      'product_dir': '<(module_path)/ff',
      'product_name': '<(module_name)',
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
        "<(module_root_dir)/deps/curl-impersonate/build/ff/include"
      ],
      'conditions': [
        ['OS=="linux"', {
          'defines': [
            'CURL_STATICLIB',
          ],
          'libraries': [
            '-L<(deps_dir)/ff/lib',           
            '-Wl,-rpath,\'$$ORIGIN/../../deps/curl-impersonate/build/ff/lib\'',            
            '-lcurl-impersonate-ff',
            '-lssl3',
            '-lsmime3',
            '-lnss3',
            '-lnssutil3',
            '-lplds4',
            '-lplc4',
            '-lnspr4',
            '-pthread',
            '-ldl',
            '-lz',
            '-lzstd',
            '-lbrotlidec',
            '-lnghttp2'
          ]
        }]
      ]
    },
    {
      'target_name': '<(module_name)_chrome',
      'type': 'loadable_module',
      'product_dir': '<(module_path)/chrome',
      'product_name': '<(module_name)',
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
        "<(module_root_dir)/deps/curl-impersonate/build/chrome/include"
      ],
      'conditions': [
        ['OS=="linux"', {
          'defines': [
            'CURL_STATICLIB',
            'CHROME_BUILD',
          ],
          'libraries': [
            '-L<(deps_dir)/chrome/lib',
            '<!@(<(deps_dir)/bin/curl-impersonate-chrome-config --static-libs)',
          ]
        }]
      ]
    },
    {
      'target_name': 'action_after_build',
      'type': 'none',
      'dependencies': [ '<(module_name)_ff', '<(module_name)_chrome' ],
      'copies': [
        {
          'files': [ '<(module_path)/ff/<(module_name).node' ],
          'destination': '<(module_root_dir)/lib/ff'
        },
        {
          'files': [ '<(module_path)/chrome/<(module_name).node' ],
          'destination': '<(module_root_dir)/lib/chrome'
        }
      ]
    }
  ]
}