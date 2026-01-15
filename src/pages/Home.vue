<template>
  <main class="page">
    <section class="hero">
      <div class="hero-content">
        <h1>
          Learn anything.<br />
          With the right tutor.
        </h1>

        <p>
          1-on-1 online tutoring for students, professionals, and lifelong learners.
        </p>

        <div class="actions">
          <button class="primary">Get started</button>
          <button class="secondary">Find a tutor</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
</script>

<style scoped>
.page {
  width: 100%;
}

/* HERO */
.hero {
  width: 100%;
  min-height: calc(100vh - 72px);

  display: flex;
  align-items: center;
}

.hero-content {
  padding-left: 80px;
  max-width: 900px;
}

.hero h1 {
  font-size: 64px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
}

.hero p {
  font-size: 20px;
  color: #555;
  max-width: 650px;
  margin-bottom: 32px;
}

.actions {
  display: flex;
  gap: 18px;
}

.primary {
  background: #000;
  color: #fff;
  border: none;
  padding: 14px 28px;
  border-radius: 14px;
  font-size: 16px;
}

.secondary {
  background: transparent;
  border: 1px solid #ccc;
  padding: 14px 28px;
  border-radius: 14px;
  font-size: 16px;
}

/* MOBILE */
@media (max-width: 768px) {
  .hero-content {
    padding: 0 24px;
    text-align: center;
  }

  .hero h1 {
    font-size: 40px;
  }

  .actions {
    flex-direction: column;
    align-items: center;
  }

  .primary,
  .secondary {
    width: 100%;
    max-width: 320px;
  }
}
</style>
