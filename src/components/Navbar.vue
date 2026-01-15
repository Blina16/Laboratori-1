<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div class="container">
      <a class="navbar-brand fw-bold" href="/">Tutorly</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="nav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="#">Find a tutor</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Subjects</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Become a tutor</a></li>
        </ul>

        <router-link to="/signup" class="btn btn-dark">
          Sign up
        </router-link>
      </div>
    </div>
  </nav>
</template>
