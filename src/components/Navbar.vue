<template>
    <nav class="navbar fixed-top navbar-dark bg-light">
        <a class="navbar-brand" href="#">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/TCU_Horned_Frogs_logo.svg/1200px-TCU_Horned_Frogs_logo.svg.png" width="100" height="50" alt="">
        </a>
        <hr>
        <span v-for="route of $router.getRoutes()" :key="route.name">
                <router-link :to="{ name: route.name }" v-if="route.meta?.title" class="dropdown-item">{{
                  route.meta.title
                }}</router-link>
        </span>
    </nav>
</template>

<style>

</style>