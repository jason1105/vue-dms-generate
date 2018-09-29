# vue-dms-generate
A plugin for Vue to quick generate~


快速生成页面中的控件。 

## Useage

dms g [json file path]     

## JSON file sample:

```json
{
  "form": [
    {"name": "name", "disp": "姓名", "type": "input"},
    {"name": "age", "disp": "年龄", "type": "input"},
    {"name": "sex", "disp": "性别", "type": "radio", "number": 3},
    {"name": "work", "disp": "工作", "type": "checkbox"}
  ],
  "list": [
    {"name": "name", "disp": "姓名"},
    {"name": "age", "disp": "年龄"},
    {"name": "sex", "disp": "性别"}
  ]

}
```