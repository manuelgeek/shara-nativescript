<template>
    <Page actionBarHidden="true">
        <StackLayout orientation="vertical" verticalAlignment="center" class="px-4 w-full">
            <Image
                    src="~/assets/images/shara_logo.png"
                    width="200"
                    horizontalAlignment="center"
            />
            <StackLayout orientation="vertical" class="w-full">
                <FlexboxLayout alignItems="center" class="w-full border-b-2 border-gray-700 mt-32">
                    <Image src.decode="font://&#xf0e0;" width="20" class="fas t-36 text-gray-700" />
                    <TextField hint="Email" fontSize="20" class="placeholder-gray-700 text-gray-700" />
                </FlexboxLayout>

                <FlexboxLayout alignItems="center" class="w-full border-b-2 border-gray-700 mt-5">
                    <Image src.decode="font://&#xf023;" width="20" class="fas t-36 text-gray-700" />
                    <TextField hint="Password" fontSize="20" secure="true" class="placeholder-gray-700 text-gray-700" />
                </FlexboxLayout>
                <Button text="Login" fontSize="20" class="w-full text-center py-2 rounded-lg text-white bg-green-500 mt-5" />
                <Label text="Don't have an account? Sign up" fontSize="20" class="text-gray-700 mt-5 text-center"></Label>
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>

</script>

<style lang="scss" scoped>

</style>
