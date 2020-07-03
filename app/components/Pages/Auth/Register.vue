<template>
    <Page actionBarHidden="true">
        <StackLayout orientation="vertical" verticalAlignment="center" class="px-6 w-full">
            <Image
                    src="~/assets/images/shara_logo.png"
                    width="200"
                    horizontalAlignment="center"
            />
            <StackLayout orientation="vertical" class="w-full mt-20">
                <FlexboxLayout alignItems="center" class="w-full mt-5">
                    <Image src.decode="font://&#xf007;" width="50" class="fas t-36 text-gray-700 mr-3" />
                    <StackLayout>
                        <TextField v-model="form.name" hint="Full Name" fontSize="20" autocapitalizationType="words" class="placeholder-gray-700 text-gray-700 w-full border-b-2 border-gray-700" />
                    </StackLayout>
                </FlexboxLayout>

                <FlexboxLayout alignItems="center" class="w-full mt-5">
                    <Image src.decode="font://&#xf0e0;" width="50" class="fas t-36 text-gray-700 mr-3" />
                    <StackLayout>
                        <TextField v-model="form.email" keyboardType="email" autocapitalizationType="none" hint="Email" fontSize="20" class="placeholder-gray-700 text-gray-700 w-full border-b-2 border-gray-700" />
                    </StackLayout>
                </FlexboxLayout>

                <FlexboxLayout alignItems="center" class="w-full mt-5">
                    <Image src.decode="font://&#xf098;" width="50" class="fas t-36 text-gray-700 mr-3" />
                    <StackLayout>
                        <TextField v-model="form.phone_number" hint="Phone Number" fontSize="20" keyboardType="phone" class="placeholder-gray-700 text-gray-700 w-full border-b-2 border-gray-700" />
                    </StackLayout>
                </FlexboxLayout>

                <FlexboxLayout alignItems="center" class="w-full mt-5">
                    <Image src.decode="font://&#xf023;" width="50" class="fas t-36 text-gray-700 mr-3" />
                    <StackLayout>
                        <TextField v-model="form.password" hint="Password" fontSize="20" secure="true" class="placeholder-gray-700 text-gray-700 w-full border-b-2 border-gray-700" />
                    </StackLayout>
                </FlexboxLayout>
                <Button :text="button" fontSize="20" class="w-full text-center py-2 rounded-lg text-white bg-green-500 mt-5" @tap="register" />
                <Label text="Already have an account? Sign in" fontSize="20" class="text-gray-700 mt-5 text-center" @tap="$navigator.navigate('/login')"></Label>
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        name: 'Register',
        data () {
            return{
                form: {
                    name: '',
                    email: '',
                    phone_number: '',
                    password: ''
                },
                button: 'Register'
            }
        },
        mounted() {
            this.checkNoAuth()
        },
        methods: {
            register () {
                if(this.form.name === '' || this.form.email === '' || this.form.phone_number === '' || this.form.password === ''){
                    return this.$feedback.error({
                        title: 'Error',
                        message: 'All fields are needed',
                    });
                }
                this.button = 'Registering ...'
                const vm = this
                axios.post('register', this.$data.form)
                    .then(response => {
                        this.$store.dispatch('loginUser', response.data.data.token).then(_fn =>{
                            vm.$navigator.navigate('/home', { clearHistory: true })
                            vm.form.email = ''
                            vm.form.name = ''
                            vm.form.phone_number = ''
                            vm.form.password = ''
                            vm.button = 'Register'
                        })
                    })
                    .catch(error => {
                        if(error.response.status === 400 ) {
                            this.$feedback.error({
                                title: 'Error',
                                message: error.response.data.message,
                            });
                        }
                        this.button = 'Register'
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
