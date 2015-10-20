module.exports =
  props:
    checked:
      validator: (value) ->
        typeof value is 'boolean' or value instanceof Array
      required: true
      twoWay: true
    disabled: Boolean
  computed:
    isChecked: ->
      if typeof @checked is 'boolean'
        @checked
      else
        @value in @checked
