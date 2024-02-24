<template>
<!-- Navbar-->

<header class="navbar navbar-expand-lg navbar-light bg-light fixed-top" data-scroll-header>
    <!-- Off Canvas Side -->
    <div class="container">
        <a class="navbar-brand me-3 me-xl-4" href="real-estate-home.html">
            <img class="d-block" src="../public/img/logo/logo-dark.svg" width="116" alt="Finder">
        </a>
        <button class="navbar-toggler ms-auto" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="btn btn-sm text-primary d-none d-lg-block order-lg-3" 
            href="#signin-modal" 
            data-bs-toggle="modal"
        >
            
                <a href="#" @click="logout">
                    <i class="fi-user me-2"></i>Log out
                  </a>                  
                <i class="fi-user me-2"></i>Log out
            
        </a>
        <a class="btn btn-primary btn-sm ms-2 order-lg-3" 
            href="real-estate-add-property.html"
        >
            <i class="fi-plus me-2"></i>Add<span class='d-none d-sm-inline'> property</span>
        </a>
        <div class="collapse navbar-collapse order-lg-2" id="navbarNav">
            <ul class="navbar-nav navbar-nav-scroll" style="max-height: 35rem;">                
                <!-- Menu items-->
                <li class="nav-item active"><a class="nav-link" href="/">Home</a></li>
                <li class="nav-item dropdown">
                    <!--<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Cerco Casa</a>-->
                    <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Cerco Casa</a>
                    <ul class="dropdown-menu">
                        <li><nuxt-link class="dropdown-item" to="/estates/affitto">Immobili in Affitto</nuxt-link></li>
                        <li><nuxt-link class="dropdown-item" to="/estates/vendita">Immobili in Vendita</nuxt-link></li>
                        <li><nuxt-link class="dropdown-item" to="/estates/all">Tutti gli Immobili</nuxt-link></li>
                        <!--
                        <li><a class="dropdown-item" href="real-estate-catalog-rent.html">Property for Rent</a></li>
                        <li><a class="dropdown-item" href="real-estate-catalog-sale.html">Property for Sale</a></li>
                        <li><a class="dropdown-item" href="real-estate-single.html">Single Property</a></li>
                        -->
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Vendo Casa</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="https://finder.createx.studio/real-estate-add-property.html">Segnalaci immobile</a></li>
                        <li><nuxt-link class="dropdown-item" to="/contact-form">Richiedi un appuntamento</nuxt-link></li>
                        <li><a class="dropdown-item" href="real-estate-vendor-properties.html">Vendor Page: Properties</a></li>
                        <li><a class="dropdown-item" href="real-estate-vendor-reviews.html">Vendor Page: Reviews</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="real-estate-vendor-reviews.html">Vendor Page: Reviews</a></li>
                    </ul>
                </li>
                <li class="nav-item d-lg-none">
                    <!--<a class="nav-link" href="#advanced-search-modal" data-bs-toggle="modal"><i class="fi-search me-2"></i>Ricerca Avanzata</a>-->
                    <!--<a class="nav-link" href="#" data-trigger="card-mobile"><i class="fi-search me-2"></i>Ricerca Avanzata</a>-->
                    <!--<a class="nav-link" href="#" @click.prevent="handleClick"><i class="fi-search me-2"></i>Ricerca Avanzata</a>-->
                    <a class="nav-link" data-trigger="card_mobile" href="#" @click.prevent="show_offcanvas('card_mobile')"><i class="fi-search me-2"></i>Ricerca Avanzata</a>
                    <!--<button data-trigger="card_mobile" class="d-lg-none btn btn-warning" type="button">  Show card </button>-->
                    
                    
                </li>
                <!-- ATTENTION HERE -->
                <li v-if="obj && window.innerWidth < 992" class="nav-item">
                    <a class="nav-link" href="/estates/alt-listing">Cerca</a>
                </li>
                <li v-if="obj" class="nav-item"><a class="nav-link" href="/estates/alt-listing">Le mie ricerche({{obj}})</a></li>
                <li v-if="obj" class="nav-item"><a class="nav-link" href="/estates/alt-listing">I miei favoriti({{obj}})</a></li>
                <!-- END OF ATTENTION -->
                <li class="nav-item dropdown">
                    <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Agenzia</a>
                    <ul class="dropdown-menu">
                        <li><nuxt-link class="dropdown-item" to="/about">Chi Siamo</nuxt-link></li>
                        <li><a class="dropdown-item" href="real-estate-property-promotion.html">I nostri servizi</a></li>
                        <!--
                        <li><a class="dropdown-item" href="real-estate-account-info.html">Personal Info</a></li>
                        <li><a class="dropdown-item" href="real-estate-account-security.html">Password &amp; Security</a></li>
                        <li><a class="dropdown-item" href="real-estate-account-properties.html">My Properties</a></li>
                        <li><a class="dropdown-item" href="real-estate-account-wishlist.html">Wishlist</a></li>
                        <li><a class="dropdown-item" href="real-estate-account-reviews.html">Reviews</a></li>
                        <li><a class="dropdown-item" href="real-estate-account-notifications.html">Notifications</a></li>
                        -->
                    </ul>
                </li>               
                <li class="nav-item dropdown">
                    <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="real-estate-about.html">About</a></li>
                        <li class="dropdown">
                            <a class="dropdown-item" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="real-estate-blog.html">Blog Grid</a></li>
                                <li><a class="dropdown-item" href="real-estate-blog-single.html">Single Post</a></li>
                            </ul>
                        </li>
                        <li><a class="dropdown-item" href="real-estate-contacts.html">Contacts</a></li>
                        <li><a class="dropdown-item" href="real-estate-help-center.html">Help Center</a></li>
                        <li><a class="dropdown-item" href="real-estate-404.html">404 Not Found</a></li>
                    </ul>
                </li>
                <li class="nav-item d-lg-none"><a class="nav-link" href="#signin-modal" data-bs-toggle="modal"><i class="fi-user me-2"></i>Sign in</a></li>
            </ul>            
        </div>
    </div>
    <span class="screen-darken"></span>    
</header>    
</template>

<script>

export default {
    name: 'toolbar',
    data () {
        return {
            obj: null
        }
    },
    /*
    computed: {
        isMobile: function() {
            return this.appGetter('isMobile')
        }
    }
    */

}

</script>

<style>
</style>