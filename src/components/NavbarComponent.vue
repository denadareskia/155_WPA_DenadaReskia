<template>
<nav class="navbar navbar-expand-lg navbar-light pt-3 pt-lg-5">
        <div class="container">
            <a class="navbar-brand" href="#">
                <h5 class="mb-0">Booking-Hotels.com</h5>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link active border-bottom" to="/">Home</router-link>
                    </li>
                    <li class="nav-item d-flex justify-content-center">
                        <router-link class="nav-link" to="services">Services</router-link>
                    </li>
                    <li class="nav-item d-flex justify-content-center">
                        <router-link class="nav-link" to="partners">Partners</router-link>
                    </li>
                    <li class="nav-item d-flex justify-content-center">
                        <router-link class="nav-link" to="testimony">Review</router-link>
                    </li>
                    <li class="nav-item d-flex justify-content-center">
                        <router-link class="nav-link" to="promo">Recommendation</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>