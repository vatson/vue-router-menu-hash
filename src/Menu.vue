<template>
  <div>
    <template v-for="(route, k) in routes">
        <router-link 
          :to="parentPath + route.path" 
          :key="k"
          v-if="route.title"
        >
          {{ route.title }}
        </router-link>
        
        <a
          v-for="(anchor, title) of route.anchors"
          :key="title"
          :href="'#' + anchor"
          @click="goToAnchor(parentPath + route.path + '#' + anchor, anchor)"
        >
          {{title}}
        </a>

        <router-menu 
          v-if="!isMaxLevel && hasChildren(route)" 
          :parent-path="parentPath + route.path + '/'" 
          :routes="route.children" 
          :level="level + 1"  
          :key="k + String(level)"
        ></router-menu>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import vue from 'vue';

import { RouteConfig, RawLocation } from 'vue-router';

@Component({
  name: 'router-menu',
})
export default class extends vue {
  @Prop({ required: true })
  private routes!: RouteConfig[];

  @Prop({ type: Number, default: 2 })
  private maxLevel!: number;

  @Prop({default: 0})
  private level!: number;

  @Prop({ type: String, default: '' })
  private parentPath!: string;

  @Prop({ type: Number, default: 0 })
  private parentLevel!: number;

  get isMaxLevel(): boolean {
    return this.level === this.maxLevel;
  }

  public goToAnchor(path: RawLocation, anchor: string) {
    this.$router.push(path, () => location.href = '#' + anchor );
  }

  private hasChildren(route: RouteConfig) {
    return route.children && route.children.length;
  }

  private links(routes: RouteConfig[] = []): RouteConfig[] {
    return routes.filter((route) => route.title);
  }
}
</script>
