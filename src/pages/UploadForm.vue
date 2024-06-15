<template>
  <q-page class="q-pa-md">
    <q-card>
      <!-- Загрузка файла -->
      <q-card-section>
        <q-form @submit.prevent="onSubmit">
          <q-uploader
            :label="uploaderLabel"
            :label-color="uploaderLabelColor"
            accept=".xlsx"
            @added="onFileAdded"
            @removed="onFileRemoved"
            :auto-upload="false"
            v-model="uploadedFiles"
          ></q-uploader>
          <q-btn
            type="submit"
            label="Загрузить"
            color="primary"
            class="q-mt-md"
            :disable="isSubmitDisabled"
          />
        </q-form>
      </q-card-section>

      <q-card-section v-if="fileUploaded">
        <div class="q-pa-md">
          <div class="text-h6">Файл успешно обработан</div>
          <q-btn-group>
            <q-btn label="Перейти к DashBoard" color="primary" @click="goToDashboard" />
          </q-btn-group>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { Loading } from 'quasar';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'UploadForm',
  setup() {
    const router = useRouter();
    const isProcessing = ref(false);
    const file = ref<File | null>(null);
    const fileUploaded = ref(false);
    const uploaderLabel = ref('Выберите файл .xlsx');
    const uploaderLabelColor = ref('black');
    const uploadedFiles = ref<File[]>([]);
    const isSubmitDisabled = ref(true);

    const onFileAdded = (files: File[]) => {
      if (files.length) {
        const selectedFile = files[0];
        const isXlsx = selectedFile.name.endsWith('.xlsx');
        if (!isXlsx) {
          uploaderLabel.value = 'Некорректный формат файла, выберите файл .xlsx';
          uploaderLabelColor.value = 'red';
          file.value = null;
          uploadedFiles.value = [];
          isSubmitDisabled.value = true;
          return;
        }
        file.value = selectedFile;
        uploaderLabel.value = 'Выберите файл .xlsx';
        uploaderLabelColor.value = 'black';
        isSubmitDisabled.value = false;
      }
    };

    const onFileRemoved = () => {
      file.value = null;
      uploadedFiles.value = [];
      uploaderLabel.value = 'Выберите файл .xlsx';
      uploaderLabelColor.value = 'black';
      isSubmitDisabled.value = true;
    };

    const onSubmit = async () => {
      if (!file.value) {
        uploaderLabel.value = 'Пожалуйста, выберите файл для загрузки';
        uploaderLabelColor.value = 'red';
        console.error('Пожалуйста, выберите файл для загрузки');
        return;
      }

      isProcessing.value = true;
      Loading.show({
        message: 'Загрузка файла...'
      });

      try {
        // Закомментирован реальный запрос и добавлена заглушка
        // const formData = new FormData();
        // formData.append('file', file.value);

        // Заглушка вместо реального запроса
        await new Promise((resolve) => setTimeout(resolve, 2000)); // симуляция задержки 2 секунды

        // Успешный результат обработки файла
        // const response = await fetch('/dataset', {
        //   method: 'POST',
        //   body: formData,
        // });

        // if (!response.ok) {
        //   throw new Error('Ошибка при загрузке файла');
        // }

        // const data = await response.blob();
        const data = new Blob(['Hello, world!'], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

        const downloadUrl = URL.createObjectURL(data);
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = 'processed_data.xlsx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        fileUploaded.value = true;

        console.log('Файл успешно обработан и загружен');

        // Очистить загруженный файл
        file.value = null;
        uploadedFiles.value = [];
        isSubmitDisabled.value = true;
      } catch (error) {
        console.error('Ошибка при обработке файла:', error);
      } finally {
        isProcessing.value = false;
        Loading.hide();
      }
    };

    const goToDashboard = () => {
      router.push('/dashboard');
    };

    return {
      isProcessing,
      onFileAdded,
      onFileRemoved,
      onSubmit,
      fileUploaded,
      goToDashboard,
      uploaderLabel,
      uploaderLabelColor,
      file,
      uploadedFiles,
      isSubmitDisabled
    };
  }
});
</script>

<style scoped>
.q-card {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
}
</style>
