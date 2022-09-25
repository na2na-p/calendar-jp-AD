# Usage

```sh
yarn start "fileName" "colName" "to"

# Example
yarn start -p "input.csv" -c "生年月日" -t "jp" # -> input_jp.csv "西暦xx年xx月xx日"

# TODO
yarn start -p "input.csv" -c "生年月日" -t "en" # -> input_ad.csv "xxxx/xx/xx"
```

デフォルトで Shift_JIS で吐き出します
