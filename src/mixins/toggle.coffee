module.exports =
  props:
    checked:
      validator: (value) ->
        typeof value is 'boolean' or value instanceof Array
      required: true
      twoWay: true
    disabled:
      required: false
    id: String
    value:
      required: false
  computed:
    isChecked: ->
      if typeof @checked is 'boolean'
        @checked
      else
        @value in @checked
