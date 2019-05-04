<template>
    <div class="goodsdesc-container">
        <h3>{{info.title}}</h3>
        <hr>

        <div class="content" v-html="info.content"></div>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                info:{}
            };
        },
        methods:{
            getGoodsDesc(){
                this.$http.get('api/goods/getdesc/'+this.$route.params.id).
                    then(result => {
                        if (result.body.status === 0){
                            this.info = result.body.message[0];
                        }
                })
            }
        },
        created() {
            this.getGoodsDesc()
        },
    }


</script>


<style lang="scss">
    .goodsdesc-container{
        padding: 4px;
        h3{
            font-size: 16px;
            color: #8a6de9;
            text-align: center;
            margin: 15px 0;
        }
        .content{
            img{
                width: 100%;
                height: 100%;
            }
        }
    }


</style>
