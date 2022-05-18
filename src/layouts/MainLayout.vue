<template>
  <q-layout view="lHh LpR lff">

    <q-header reveal bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <router-link to="/">
            <q-avatar  style="width: 60px;  height: 60px" class="q-ma-xs">
              <img src="../assets/asss.png" >
            </q-avatar>
            O'rta Qishloq
          </router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <div class="q-mt-md">
        <div class="flex justify-end">
          <q-icon class="q-mr-lg" color="brown-4" name="arrow_back" size="38px" @click="toggleLeftDrawer "/>
        </div>
          <router-link :to="drawerbit.to" class="text" v-for="drawerbit in drawerbits" :key="drawerbit">
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon :name="drawerbit.iconname" color="light-blue-5" size="44px" />
            </q-item-section>

            <q-item-section class="drawertext" >
              {{drawerbit.drawertext}}
            </q-item-section>

          </q-item>
          <q-separator />
        </router-link>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-item class="row justify-around">
            <a :href="footericon.to" v-for="footericon in footericons " :key="footericon">
              <q-item-section avatar>
                <q-icon :name="footericon.iconname" color="light-blue-0" size="44px" />
              </q-item-section>
            </a>
          </q-item>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>


  </q-layout>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup () {
      const leftDrawerOpen = ref(false)

      return {
        leftDrawerOpen,
        toggleLeftDrawer () {
          leftDrawerOpen.value = !leftDrawerOpen.value
        },
        drawerbits:[
          {
            to:"/",
            iconname:"home",
            drawertext:"Bosh Sahifa"
          },
          {
            to:"/gaz",
            iconname:"announcement",
            drawertext:"Ilova haqida"
          },
          {
            to:"/gaz",
            iconname:"settings",
            drawertext:"Sozlamalar"
          },
          {
            to:"/forcomment",
            iconname:"comment",
            drawertext:"Komentaria"
          },
          {
            to:"/gaz",
            iconname:"assignment",
            drawertext:"Biz bilan bog'lanish"
          },
        ],
        footericons:[
          {
            to:"https://t.me/+3swuGvgjUhNiY2Yy",
            iconname:"telegram"
          },
          {
            to:"/gaz",
            iconname:"telegram"
          },
           {
            to:"https://www.facebook.com/groups/202121768771931/?ref=share",
            iconname:"facebook"
          }
        ]
      }
    }
  }
  </script>
  <style scoped>
    .drawertext{
      color:rgb(0, 177, 231);
    }
    a{
      text-decoration: none;
      color:white;
    }
     .text{
      color: black;
      font-size: 24px;
    }
  </style>
