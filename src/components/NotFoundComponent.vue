<template>
    <section id="notfound" class="h-100 w-100 bg-white" style="box-sizing: border-box;">
        <div class="container">
            <div class="empty-2-2 container mx-auto d-flex align-items-center justify-content-center flex-column"
                style="font-family: 'Poppins', sans-serif;">
                <img class="main-img img-fluid" src="../../public/assets/images/Empty-2-2.png" alt="">
                <div class="text-center w-100">
                    <h1 class="title-text">
                        Opss! Something Missing
                    </h1>
                    <p class="title-caption">
                        The page you’re looking for isn’t found. We<br class="d-sm-block d-none"> suggest you Back to
                        Homepage.
                    </p>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-back d-inline-flex">
                            <router-link class="nav-link" to="/" style="color: white;">Back to Homepage</router-link>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>