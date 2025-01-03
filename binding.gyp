{
  'variables': {
    'module_name': 'node_libcurl',
    'deps_dir': '<(module_root_dir)/deps/curl-impersonate/build/dist',
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
        "<(module_root_dir)/deps/curl-impersonate/build/curl-8.1.1/include"
      ],
      'conditions': [
        ['OS=="linux"', {
          'defines': [
            'CURL_STATICLIB'
          ],
          'include_dirs': [
            '<(module_root_dir)/deps/curl-impersonate/build/nss-3.92/dist/Release/include/nss',
            '<(module_root_dir)/deps/curl-impersonate/build/nss-3.92/dist/Release/include/nspr',
          ],
          'libraries': [
            '-L<(module_root_dir)/deps/curl-impersonate/build/dist/ff/lib',
            '-L<(module_root_dir)/deps/curl-impersonate/build/nss-3.92/dist/Release/lib',
            '-Wl,-rpath,\'$$ORIGIN/../../deps/curl-impersonate/build/dist/ff/lib\'',
            '-Wl,-rpath,\'$$ORIGIN/../../deps/curl-impersonate/build/nss-3.92/dist/Release/lib\'',
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
        "<(module_root_dir)/deps/curl-impersonate/build/curl-8.1.1/include"
      ],
      'conditions': [
        ['OS=="linux"', {
          'defines': [
            'CURL_STATICLIB',
          ],
          'libraries': [
            '-L<(deps_dir)/chrome/lib',
            '<!@(<(deps_dir)/chrome/bin/curl-impersonate-chrome-config --static-libs)',
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