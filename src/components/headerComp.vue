<script>
export default{
        name: "headerComp",
        data() {
            return {
                
            }
        }
    }
</script>

<template>
     <div id="navbar">
        <p>Logo</p>
        <div>
            <span>Cerca il tuo cocktail</span>
            <input type="text">
        </div>
     </div>
</template>

<style lang="scss" scoped>
    #navbar{
        //width: 100px;
        //height: 20px;
        background-color: rgb(63, 106, 245);
        display: flex;
        justify-content:space-between;
        color: white;
    }

</style>