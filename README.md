# Semver Validate Action

The following action simply validates a variable and returns on a bool.
## Inputs

## `semver-input`

**Required** Receives type ANY to validate against Semantic Version formatting.

## Outputs

## `is_Semver`

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