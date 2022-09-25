<template>
  <BFormGroup class="mb-3 mt-3 w-25">
    <BFormInput
      :placeholder="placeholder"
      class="search-input"
      size="sm"
      :value="value"
      :type="type"
      @input="$emit('input', $event)"
    />
  </BFormGroup>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    type: { type: String, default: "text" },
    label: { type: String, default: "" },
    value: { type: [String, Number], default: "" },
    placeholder: { type: String, default: "" },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.search-input {
  height: 34px;
}
.form-control {
  &:focus {
    border-color: #409aff;
  }
}
</style>
