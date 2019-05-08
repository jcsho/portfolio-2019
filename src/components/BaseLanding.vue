<template>
    <v-container>
        <v-layout align-center justify-center row>
            <h1>{{ tagline }}</h1>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class BaseLanding extends Vue {

    @Prop({ default: 'Welcome to my site' })
    public tagline !: string;

}
</script>

<style>

</style>
