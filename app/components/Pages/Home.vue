<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!" />
        <StackLayout orientation="vertical" verticalAlignment="center" >
            <Label
                    class="message"
                    :text="msg"
                    col="0"
                    row="0"
            />
            <Label
                    fontSize="22"
                    class="mt-5 text-green-500 text-center"
                    text="Tap Me"
                    @tap="message"
            />
            <Button
                    text="Create an order"
                    @tap="onCreateOrder"
            />
            <Button
                    text="Logout"
                    @tap="logout"
                    class="mt-5 bg-red-400"
            />
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                msg: "Hello World!"
            };
        },
        mounted() {
            this.checkAuth()
        },
        methods: {
            async onCreateOrder() {
                this.$navigator.navigate('/order')
            },
            message(){
                this.$feedback.success({
                    title: 'Success',
                    message: "I'm an OK message",
                });
            },
            checkAuth() {
                if(!this.$store.getters.isLoggedIn) {
                    this.$navigator.navigate('/login', { clearHistory: true })
                }
            },
            logout(){
                const vm = this
                this.$store.dispatch('logoutUser').then(_fn => {
                    vm.$navigator.navigate('/login', { clearHistory: true })
                })

            }
        }
    };
</script>

<style lang="scss" scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
