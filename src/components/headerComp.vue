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
        //background-color: rgba(36, 34, 34, 0.3);
        display: flex;
        justify-content:space-between;
        color: white;
        border-bottom: 2px solid #ae8652;
    }

</style>