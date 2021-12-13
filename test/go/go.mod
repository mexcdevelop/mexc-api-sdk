module test/mexcapisdk

go 1.17

replace mexc-sdk/mexcsdk => ../../dist/go/mexcsdk

require mexc-sdk/mexcsdk v0.0.0-00010101000000-000000000000

require (
	github.com/Masterminds/semver/v3 v3.1.1 // indirect
	github.com/aws/jsii-runtime-go v1.44.1 // indirect
)