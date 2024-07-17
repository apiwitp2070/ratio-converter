<template>
  <div>
    <VApp>
      <VAppBar color="primary" elevation="0">
        <VAppBarTitle>Ratio Converter</VAppBarTitle>
      </VAppBar>
      <VMain>
        <div class="mt-20">
          <VForm>
            <VContainer>
              <VRow>
                <VCol>
                  <VRow class="row-container">
                    <VCol cols="12" class="title-text"> Base Ratio </VCol>
                    <VCol cols="12">
                      <VNumberInput
                        variant="outlined"
                        v-model="width1"
                        label="Width 1"
                        placeholder="Enter width 1"
                        hide-details
                        @update:model-value="onWidth1Update"
                      />
                    </VCol>
                    <VCol cols="12" class="pt-8">
                      <VNumberInput
                        variant="outlined"
                        v-model="height1"
                        label="Height 1"
                        placeholder="Enter height 1"
                        hide-details
                        @update:model-value="onHeight1Update"
                      />
                    </VCol>
                  </VRow>
                </VCol>
                <VCol cols="1" class="flex justify-center items-center">
                  <VIcon>mdi-arrow-left-right</VIcon>
                </VCol>
                <VCol>
                  <VRow class="row-container">
                    <VCol cols="12 title-text"> Converted </VCol>
                    <VCol cols="12">
                      <VNumberInput
                        variant="outlined"
                        v-model="width2"
                        label="Width 2"
                        placeholder="Enter width 2"
                        hide-details
                        @update:model-value="onWidth2Update"
                      />
                    </VCol>
                    <VCol cols="12" class="pt-8">
                      <VNumberInput
                        variant="outlined"
                        v-model="height2"
                        label="Height 2"
                        placeholder="Enter height 2"
                        hide-details
                        @update:model-value="onHeight2Update"
                      />
                    </VCol>
                  </VRow>
                </VCol>
              </VRow>
            </VContainer>
          </VForm>
        </div>
      </VMain>
    </VApp>
  </div>
</template>

<script setup lang="ts">
const width1 = ref<number>(0);
const height1 = ref<number>(0);
const width2 = ref<number>(0);
const height2 = ref<number>(0);

const onWidth1Update = (value: number) => {
  if (value > 0 && height1.value > 0) {
    const ratio = value / height1.value;
    if (ratio > 0) {
      width2.value = ratio * height2.value;
    }
  }
};

const onHeight1Update = (value: number) => {
  if (value > 0) {
    const ratio = width1.value / value;
    if (ratio > 0) {
      height2.value = width2.value / ratio;
    }
  }
};

const onWidth2Update = (value: number) => {
  if (value > 0 && width1.value > 0 && height1.value > 0) {
    const otherSideRatio = width1.value / height1.value;
    if (otherSideRatio > 0) {
      height2.value = value / otherSideRatio;
    }
  }
};

const onHeight2Update = (value: number) => {
  if (value > 0 && width1.value > 0 && height1.value > 0) {
    const otherSideRatio = width1.value / height1.value;
    if (otherSideRatio > 0) {
      width2.value = value * otherSideRatio;
    }
  }
};
</script>

<style lang="scss">
.title-text {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  opacity: 0.3;
  font-size: 72px;
  font-weight: bold;
  color: lightgray;
  transform: rotate(-10deg);
  width: fit-content;
}

.row-container {
  position: relative;
}
</style>
