<template>
    <div>
        <cmtbox :id="$route.params.id"></cmtbox>
    </div>
</template>

<script>
    import cmtbox from '../subcompoents/comment.vue'

    export default {
    data(){},
    components:{
        cmtbox
    }
    }

</script>

<style></style>

