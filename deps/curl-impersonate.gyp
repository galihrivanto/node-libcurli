{
  "targets": [{
    "target_name": "curl-impersonate",
    "type": "none",
    "direct_dependent_settings": {
      "include_dirs": [
        "<!@(find curl-impersonate/build/curl-*/include -type d | head -n 1)",
      ],
      "conditions": [
        ["OS=='linux'", {
          "libraries": [
            "<!@(find curl-impersonate/build/curl-*/lib -name '*.so' -o -name '*.a' | head -n 1)",
            "-lssl",
            "-lcrypto",
            "-lnghttp2",
            "-lbrotlidec",
            "-lz"
          ]
        }]
      ]
    },
    "include_dirs": [
      "<!@(find curl-impersonate/build/curl-*/include -type d | head -n 1)"
    ]
  }]
}