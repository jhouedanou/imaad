<script setup>
import { reactive, ref } from 'vue'

const props = defineProps({
  form: { type: Object, required: true },
  variant: { type: String, default: 'zeplin' }, // 'zeplin' | 'card' | 'mini'
  mailto: { type: String, default: 'infos@imaadholding.com' }
})

const WEB3FORMS_KEY = '6992f20d-ab58-4755-9e1a-4b7f842d5b98'

const fields = reactive({ name: '', email: '', org: '', objet: '', message: '' })
const mini = reactive({ name: '', email: '' })
const sending = ref(false)
const status = ref(null) // 'success' | 'error' | null

// Reprend la logique du template Web3Forms : FormData(form) + access_key
async function handleSubmit(e) {
  const form = e.target
  const formData = new FormData(form)

  // retire les inputs fichier vides (sinon Web3Forms répond 400)
  for (const [key, value] of [...formData.entries()]) {
    if (value instanceof File && value.size === 0) formData.delete(key)
  }
  formData.append('access_key', WEB3FORMS_KEY)

  sending.value = true
  status.value = null

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
    const data = await response.json()

    if (response.ok && data.success) {
      status.value = 'success'
      form.reset()
      Object.keys(fields).forEach((k) => (fields[k] = ''))
      Object.keys(mini).forEach((k) => (mini[k] = ''))
    } else {
      status.value = 'error'
    }
  } catch {
    status.value = 'error'
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <!-- Variante page Contact -->
  <form
    v-if="variant === 'zeplin'"
    class="contact-form-zeplin"
    @submit.prevent="handleSubmit"
  >
    <h3>{{ form.title }}</h3>

    <!-- Honeypot anti-spam -->
    <input type="checkbox" name="botcheck" class="hidden" style="display:none">
    <input type="hidden" name="subject" :value="`[IMAAD] Demande — ${fields.name}`">
    <input type="hidden" name="from_name" value="Site IMAAD Financial Group">

    <div class="form-row">
      <div class="form-group">
        <label class="form-label" for="contact-name">{{ form.fields.name.label }} <span v-if="form.fields.name.required" class="req">*</span></label>
        <input v-model="fields.name" type="text" id="contact-name" name="Nom complet" class="form-control" :placeholder="form.fields.name.placeholder" :required="form.fields.name.required">
      </div>
      <div class="form-group">
        <label class="form-label" for="contact-email">{{ form.fields.email.label }} <span v-if="form.fields.email.required" class="req">*</span></label>
        <input v-model="fields.email" type="email" id="contact-email" name="email" class="form-control" :placeholder="form.fields.email.placeholder" :required="form.fields.email.required">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label" for="contact-org">{{ form.fields.org.label }}</label>
        <input v-model="fields.org" type="text" id="contact-org" name="Organisation" class="form-control" :placeholder="form.fields.org.placeholder">
      </div>
      <div class="form-group">
        <label class="form-label" for="contact-objet">{{ form.fields.objet.label }}</label>
        <select v-model="fields.objet" id="contact-objet" name="Objet" class="form-control">
          <option v-for="opt in form.fields.objet.options" :key="opt">{{ opt }}</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label" for="contact-file">{{ form.fields.file.label }}</label>
      <div class="file-upload" @click="$refs.fileInput.click()">
        <span class="file-upload-icon">📎</span>
        <span class="file-upload-text">{{ form.fields.file.hint }}</span>
        <input ref="fileInput" type="file" id="contact-file" name="attachment" hidden>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label" for="contact-msg">{{ form.fields.message.label }}</label>
      <textarea v-model="fields.message" id="contact-msg" name="message" class="form-control" rows="4" :placeholder="form.fields.message.placeholder"></textarea>
    </div>
    <button type="submit" class="btn btn-gold" :disabled="sending">
      {{ sending ? 'Envoi…' : form.submit }}
    </button>
    <p v-if="status === 'success'" class="form-status form-status--ok">Message envoyé. Merci !</p>
    <p v-if="status === 'error'" class="form-status form-status--err">Erreur. Réessayez ou écrivez à {{ mailto }}.</p>
  </form>

  <!-- Variante carte (aperçu accueil) -->
  <form
    v-else-if="variant === 'card'"
    class="contact-form-card"
    @submit.prevent="handleSubmit"
  >
    <h3>{{ form.title }}</h3>

    <input type="checkbox" name="botcheck" style="display:none">
    <input type="hidden" name="subject" :value="`[IMAAD] Demande — ${fields.name}`">
    <input type="hidden" name="from_name" value="Site IMAAD Financial Group">

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">{{ form.fields.name.label }} <span class="req">*</span></label>
        <input v-model="fields.name" type="text" name="Nom complet" class="form-control" :placeholder="form.fields.name.placeholder" required>
      </div>
      <div class="form-group">
        <label class="form-label">{{ form.fields.email.label }} <span class="req">*</span></label>
        <input v-model="fields.email" type="email" name="email" class="form-control" :placeholder="form.fields.email.placeholder" required>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">{{ form.fields.org.label }}</label>
        <input v-model="fields.org" type="text" name="Organisation" class="form-control" :placeholder="form.fields.org.placeholder">
      </div>
      <div class="form-group">
        <label class="form-label">{{ form.fields.objet.label }}</label>
        <select v-model="fields.objet" name="Objet" class="form-control">
          <option v-for="opt in form.fields.objet.options" :key="opt">{{ opt }}</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">{{ form.fields.file.label }}</label>
      <div class="file-upload" @click="$refs.fileInputCard.click()">
        <span class="file-upload-icon">📎</span>
        <span class="file-upload-text">{{ form.fields.file.hint }}</span>
        <input ref="fileInputCard" type="file" name="attachment" hidden>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">{{ form.fields.message.label }}</label>
      <textarea v-model="fields.message" name="message" class="form-control" rows="4" :placeholder="form.fields.message.placeholder"></textarea>
    </div>
    <button type="submit" class="btn btn-gold btn-full btn-submit" :disabled="sending">
      {{ sending ? 'Envoi…' : form.submit }}
    </button>
    <p v-if="status === 'success'" class="form-status form-status--ok">Message envoyé. Merci !</p>
    <p v-if="status === 'error'" class="form-status form-status--err">Erreur. Réessayez ou écrivez à {{ mailto }}.</p>
  </form>

  <!-- Variante mini (hero) -->
  <form v-else class="hero-stats-card" @submit.prevent="handleSubmit">
    <div class="contact-rapide">{{ form.fields.name.label && form.title ? form.title : 'Contact rapide' }}</div>

    <input type="checkbox" name="botcheck" style="display:none">
    <input type="hidden" name="subject" value="[IMAAD] Contact rapide">
    <input type="hidden" name="from_name" value="Site IMAAD Financial Group">

    <div class="form-group">
      <input
        v-model="mini.name"
        type="text"
        name="Nom complet"
        class="form-control"
        :placeholder="form.fields.name.placeholder || 'Nom / Organisation'"
        required
      >
    </div>
    <div class="form-group" style="margin-top: 10px;">
      <input
        v-model="mini.email"
        type="email"
        name="email"
        class="form-control"
        :placeholder="form.fields.email.placeholder || 'Email'"
        required
      >
    </div>
    <button type="submit" class="btn btn-gold btn-full" :disabled="sending" style="margin-top: 20px; width: 100%; justify-content: center;">
      {{ sending ? 'Envoi…' : (form.submit || 'Contacter nos experts') }}
    </button>
    <p v-if="status === 'success'" class="form-status form-status--ok">Message envoyé. Merci !</p>
    <p v-if="status === 'error'" class="form-status form-status--err">Erreur. Réessayez.</p>
  </form>
</template>
