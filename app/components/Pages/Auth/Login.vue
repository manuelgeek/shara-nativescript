<template>
    <Page actionBarHidden="true">
        <StackLayout orientation="vertical" verticalAlignment="center" class="px-6 w-full">
            <Image
                    src="~/assets/images/shara_logo.png"
                    width="200"
                    horizontalAlignment="center"
            />
            <StackLayout orientation="vertical" class="w-full">
                <FlexboxLayout alignItems="center" class="w-full mt-32">
                    <Image src.decode="font://&#xf0e0;" width="50" class="fas t-36 text-gray-700 mr-3" />
                    <StackLayout>
                        <TextField v-model="form.email" hint="Email" fontSize="20" keyboardType="email" class="placeholder-gray-700 text-gray-700 w-full border-b-2 border-gray-700" />
                    </StackLayout>
                </FlexboxLayout>

                <FlexboxLayout alignItems="center" class="w-full mt-5">
                    <Image src.decode="font://&#xf023;" width="50" class="fas t-36 text-gray-700 mr-3" />
                    <StackLayout>
                        <TextField v-model="form.password" hint="Password" fontSize="20" secure="true" class="placeholder-gray-700 text-gray-700 w-full border-b-2 border-gray-700" />
                    </StackLayout>
                </FlexboxLayout>
                <Button :text="button" fontSize="20" class="w-full text-center py-2 rounded-lg text-white bg-green-500 mt-5" @tap="login" />
                <Label text="Don't have an account? Sign up" fontSize="20" class="text-gray-700 mt-5 text-center" @tap="$navigator.navigate('/register')"></Label>
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
export default {
    name: "Login",
    data () {
        return{
            form: {
                email: '',
                password: ''
            },
            button: 'Login'
        }
    },
    mounted() {
        this.checkNoAuth()
    },
    methods: {
        login () {
            this.button = 'Logging In ...'
            const vm = this
            axios.post('login', this.$data.form)
            .then(response => {
                this.$store.dispatch('loginUser', response.data.data.token).then(_fn =>{
                    vm.$navigator.navigate('/home', { clearHistory: true })
                    vm.form.email = ''
                    vm.form.password = ''
                    vm.button = 'Login'
                })
            })
            .catch(error => {
                if(error.response.status === 400 ) {
                    this.$feedback.error({
                        title: 'Error',
                        message: error.response.data.message,
                    });
                }
                this.button = 'Login'
            })
        },
        checkNoAuth() {
            if(this.$store.getters.isLoggedIn) {
                this.$navigator.navigate('/home', { clearHistory: true })
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
