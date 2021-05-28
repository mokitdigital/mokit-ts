<template>
  <nav>
    <b-row cols="2">
      <b-col>
      </b-col>
      <b-col class="d-flex justify-content-end p-0">
        <font-awesome-icon icon="bars" class="bars m-4" v-b-toggle.sidebar-1 />
      </b-col>
    </b-row>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@mixin linear-gradient-text ($color-top, $color-bottom) {
  background: -webkit-gradient(linear, left top, left bottom, from($color-top), to($color-bottom));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bars {
  font-size: 40px;
  @include linear-gradient-text(rgb(95, 95, 95), rgb(255, 255, 255));
  cursor: pointer;
}
</style>
