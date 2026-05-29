<script setup>
import { reactive, ref } from 'vue'

const props = defineProps({
  form: { type: Object, required: true },
  variant: { type: String, default: 'zeplin' }, // 'zeplin' | 'card' | 'mini'
  mailto: { type: String, default: 'infos@imaadholding.com' }
})

const fields = reactive({ name: '', email: '', org: '', objet: '', message: '' })
const mini = reactive({ name: '', email: '' })

function buildMailto(data) {
  const subject = encodeURIComponent(`[IMAAD] ${data.objet || 'Demande'} — ${data.name}`)
  const body = encodeURIComponent(
    `Nom: ${data.name}\nEmail: ${data.email}\nOrganisation: ${data.org || ''}\nObjet: ${data.objet || ''}\n\nMessage:\n${data.message || ''}`
  )
  return `mailto:${props.mailto}?subject=${subject}&body=${body}`
}

function submitForm() {
  window.location.href = buildMailto(fields)
}

function submitMini() {
  const subject = encodeURIComponent(`[IMAAD] Contact rapide — ${mini.name}`)
  const body = encodeURIComponent(`Nom: ${mini.name}\nEmail: ${mini.email}`)
  window.location.href = `mailto:${props.mailto}?subject=${subject}&body=${body}`
}
</script>

<template>
  <!-- Variante page Contact -->
  <form v-if="variant === 'zeplin'" class="contact-form-zeplin" @submit.prevent="submitForm">
    <h3>{{ form.title }}</h3>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label" for="contact-name">{{ form.fields.name.label }} <span v-if="form.fields.name.required" class="req">*</span></label>
        <input v-model="fields.name" type="text" id="contact-name" class="form-control" :placeholder="form.fields.name.placeholder" :required="form.fields.name.required">
      </div>
      <div class="form-group">
        <label class="form-label" for="contact-email">{{ form.fields.email.label }} <span v-if="form.fields.email.required" class="req">*</span></label>
        <input v-model="fields.email" type="email" id="contact-email" class="form-control" :placeholder="form.fields.email.placeholder" :required="form.fields.email.required">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label" for="contact-org">{{ form.fields.org.label }}</label>
        <input v-model="fields.org" type="text" id="contact-org" class="form-control" :placeholder="form.fields.org.placeholder">
      </div>
      <div class="form-group">
        <label class="form-label" for="contact-objet">{{ form.fields.objet.label }}</label>
        <select v-model="fields.objet" id="contact-objet" class="form-control">
          <option v-for="opt in form.fields.objet.options" :key="opt">{{ opt }}</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label" for="contact-file">{{ form.fields.file.label }}</label>
      <div class="file-upload">
        <span class="file-upload-icon">📎</span>
        <span class="file-upload-text">{{ form.fields.file.hint }}</span>
        <input type="file" id="contact-file" hidden>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label" for="contact-msg">{{ form.fields.message.label }}</label>
      <textarea v-model="fields.message" id="contact-msg" class="form-control" rows="4" :placeholder="form.fields.message.placeholder"></textarea>
    </div>
    <button type="submit" class="btn btn-gold">{{ form.submit }}</button>
  </form>

  <!-- Variante carte (aperçu accueil) -->
  <form v-else-if="variant === 'card'" class="contact-form-card" @submit.prevent="submitForm">
    <h3>{{ form.title }}</h3>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">{{ form.fields.name.label }} <span class="req">*</span></label>
        <input v-model="fields.name" type="text" class="form-control" :placeholder="form.fields.name.placeholder" required>
      </div>
      <div class="form-group">
        <label class="form-label">{{ form.fields.email.label }} <span class="req">*</span></label>
        <input v-model="fields.email" type="email" class="form-control" :placeholder="form.fields.email.placeholder" required>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">{{ form.fields.org.label }}</label>
        <input v-model="fields.org" type="text" class="form-control" :placeholder="form.fields.org.placeholder">
      </div>
      <div class="form-group">
        <label class="form-label">{{ form.fields.objet.label }}</label>
        <select v-model="fields.objet" class="form-control">
          <option v-for="opt in form.fields.objet.options" :key="opt">{{ opt }}</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">{{ form.fields.file.label }}</label>
      <div class="file-upload">
        <span class="file-upload-icon">📎</span>
        <span class="file-upload-text">{{ form.fields.file.hint }}</span>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">{{ form.fields.message.label }}</label>
      <textarea v-model="fields.message" class="form-control" rows="4" :placeholder="form.fields.message.placeholder"></textarea>
    </div>
    <button type="submit" class="btn btn-gold btn-full btn-submit">{{ form.submit }}</button>
  </form>

  <!-- Variante mini (hero) -->
  <form v-else class="hero-stats-card" @submit.prevent="submitMini">
    <div class="contact-rapide">{{ form.fields.name.label && form.title ? form.title : 'Contact rapide' }}</div>
    <div class="form-group">
      <input
        v-model="mini.name"
        type="text"
        class="form-control"
        :placeholder="form.fields.name.placeholder || 'Nom / Organisation'"
        required
      >
    </div>
    <div class="form-group" style="margin-top: 10px;">
      <input
        v-model="mini.email"
        type="email"
        class="form-control"
        :placeholder="form.fields.email.placeholder || 'Email'"
        required
      >
    </div>
    <button type="submit" class="btn btn-gold btn-full" style="margin-top: 20px; width: 100%; justify-content: center;">
      {{ form.submit || 'Contacter nos experts' }}
    </button>
  </form>
</template>
