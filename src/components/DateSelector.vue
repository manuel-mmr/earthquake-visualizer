<template>
  <div class="datepicker-container">
    <b-form-datepicker
      class="datepicker-from"
      :max="dateTo"
      placeholder="From"
      :value="dateFrom"
      @input="onDateFromSelection($event)"
    ></b-form-datepicker>

    <b-form-datepicker
      class="datepicker-to"
      :min="dateFrom"
      placeholder="To"
      :value="dateTo"
      @input="onDateToSelection($event)"
    ></b-form-datepicker>
  </div>
</template>

<script>
export default {
  name: "DateSelector",
  props: {
    dateFrom: String,
    dateTo: String
  },
  methods: {
    onDateFromSelection(newDate) {
      this.$emit("date-selection", newDate, this.dateTo);
    },
    onDateToSelection(newDate) {
      this.$emit("date-selection", this.dateFrom, newDate);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../scss/_variables.scss";

.datepicker-container {
  display: flex;
  flex-direction: row;
}

.datepicker-to {
  margin-top: 0;
}

.datepicker-from {
  margin-right: 20px;
}

@include viewport--medium {
  .datepicker-container {
    flex-direction: column;
  }

  .datepicker-to {
    margin-top: 20px;
  }

  .datepicker-from {
    margin-right: 0;
  }
}
</style>
