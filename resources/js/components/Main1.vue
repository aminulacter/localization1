<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                       <h1>{{$t('message.welcome')}}</h1>
							<div>
                            <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
                                <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import i18n from "../i18n";    

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        
						  data() {
								return {
									languages: [
										{ flag: 'us', language: 'en', title: 'English' },
										{ flag: 'bd', language: 'bd', title: 'Bangla' }
									]
								}
    },
    methods: {
    changeLocale(locale) {
        i18n.locale = locale;
    }
  }
      
    }
</script>
<style scoped>
button {
    padding: 15px;
    border: 1px solid green;
    font-size: 18px;
    margin: 15px;
}
</style>

