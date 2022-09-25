<template>
  <BContainer>
    <div class="comic-content-skeleton">
      <div class="comic-content-skeleton__item">
        <div>
          <Placeholder width="400px" height="800px" borderRadius="2%" />
        </div>
        <div class="content">
          <div class="comic-content-skeleton__title">
            <Placeholder width="270px" height="30px" borderRadius="2%" />
          </div>
          <span class="comic-content-skeleton__txt"
            ><Placeholder width="270px" height="30px" borderRadius="2%" />
          </span>
          <span class="comic-content-skeleton__txt"
            ><Placeholder width="270px" height="30px" borderRadius="2%" />
          </span>
          <span class="comic-content-skeleton__txt"
            ><Placeholder width="270px" height="30px" borderRadius="2%" />
          </span>
          <span class="comic-content-skeleton__txt"
            ><Placeholder width="270px" height="30px" borderRadius="2%" />
          </span>
          <span class="comic-content-skeleton__txt"
            ><Placeholder width="270px" height="30px" borderRadius="2%" />
          </span>
          <span class="comic-content-skeleton__txt"
            ><Placeholder width="270px" height="30px" borderRadius="2%" />
          </span>
          <span class="comic-content-skeleton__txt"
            ><Placeholder width="270px" height="30px" borderRadius="2%" />
          </span>
        </div>
      </div>
    </div>
  </BContainer>
</template>

<script>
import Placeholder from "../Common/Placeholder.vue";
export default {
  name: "ComicDetailSkeleton",
  components: { Placeholder },
  props: {
    imgPath: { type: String, default: "" },
    description: { type: String, default: "" },
    title: { type: String, default: "" },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800");
* {
  box-sizing: border-box;
}
.container {
  margin-top: 1%;
}

.content {
  position: absolute;
  left: 60%;
}

.comic-content-skeleton {
  width: 95%;
  position: relative;
  max-width: 800px;
  margin: auto;
  background: #fff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 25px;
  height: 90vh;
  transition: all 0.3s;

  @media screen and (max-width: 992px) {
    max-width: 680px;
    height: 400px;
  }

  @media screen and (max-width: 768px) {
    min-height: 500px;
    height: auto;
    margin: 180px auto;
  }

  @media screen and (max-height: 500px) and (min-width: 992px) {
    height: 350px;
  }

  &__item {
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__img {
    height: 85vh;
    width: auto;
    flex-shrink: 0;
    box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
    border-radius: 20px;
    transform: translateX(-80px);

    overflow: hidden;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      opacity: 0.8;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      opacity: 0;
      border-radius: 20px;
      transition: all 0.3s;
    }

    @media screen and (max-width: 992px) {
    }
    @media screen and (max-width: 768px) {
      transform: translateY(-50%);
      width: 90%;
    }
    @media screen and (max-width: 576px) {
      width: 95%;
    }
    @media screen and (max-height: 500px) and (min-width: 992px) {
      height: 270px;
    }
  }

  &__content {
    padding-right: 25px;
    @media screen and (max-width: 992px) {
    }
    @media screen and (max-width: 768px) {
      margin-top: -80px;
      text-align: center;
      padding: 0 30px;
    }

    @media screen and (max-width: 576px) {
      padding: 0;
    }
    > * {
      opacity: 0;
      transform: translateY(25px);
      transition: all 0.4s;
    }
  }

  &__txt {
    color: #7b7992;
    margin-bottom: 15px;
    display: block;
    font-weight: 500;
  }

  &__title {
    font-size: 24px;
    font-weight: 700;
    color: #0d0925;
    margin-bottom: 20px;
  }

  &__text {
    color: #4e4a67;
    margin-bottom: 30px;
    line-height: 1.5em;
  }
}
</style>
