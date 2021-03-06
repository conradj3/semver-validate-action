# Semver Validate Action

The following action simply validates a variable and returns on a bool.

[![semantic-validate-action](https://github.com/conradj3/semver-validate-action/actions/workflows/validate-semantic.yml/badge.svg)](https://github.com/conradj3/semver-validate-action/actions/workflows/validate-semantic.yml)

## Inputs

## `semver-input` **Required**

 Receives type ANY to validate against Semantic Version formatting.

## Outputs

## `isSemver`

Bool returning `true` or `false`

## Example usage

***[TRUE RETURN]***
```yaml
uses: conradj3/semver-validate-action@v1.0.1
with:
  semver-input: '1.2.3'
```


```yaml
uses: conradj3/semver-validate-action@v1.0.1
with:
  semver-input: 'v1.2.3'
```

***[FALSE RETURN]***
```yaml
uses: conradj3/semver-validate-action@v1.0.1
with:
  semver-input: 'abc'
```
