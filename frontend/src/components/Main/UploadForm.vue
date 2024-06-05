<template>
    <q-card>
        <q-card-section>
            <q-form>
                <q-input 
                type="file"
                @change="handleUpload"
                filled
                dense
                label="Upload File"
            />
            <q-btn type="submit" label="Upload" class="q-mt-md" color="primary" />
            </q-form>
        </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { Notify } from 'quasar';

export default defineComponent({
    name: 'Upload',
    emits: ['results-updated'],
    setup(_, { emit }) {
        const file = ref<File | null>(null);

        const handleUpload = async (event: Event) => {
            const target = event.target as HTMLInputElement;
            if (target.files) {
                const uploadedFile = target.files[0];
                if (uploadedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                    file.value = uploadedFile;
                } else {
                    Notify.create("Please upload a .xlsx file");
                }
            }
        }

    const uploadFile = async () => {
        if (!file.value) {
            Notify.create("Please select a file");
            return;
        }
        const formData = new FormData();
        formData.append('file', file.value);

        try {
            const response = await axios.post('/dataset', formData, {
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
        });
        emit('results-updated', response.data.results);
        Notify.create('File uploaded successfully');
        } catch (error) {
            console.error(error);
            Notify.create('File upload failed');
        }
    };

    return {
        file,
        handleUpload
        uploadFile
    };
}
})
</script>


<style>
.q-card{
    max-width: 400px;
    margin: 2rem auto;
    padding: 2rem;
}
</style>