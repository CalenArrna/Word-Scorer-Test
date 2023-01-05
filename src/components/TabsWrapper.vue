<template>
    <div class="tabs">
        <ul class="tabs__header">
            <li v-for="title in tabTitles" :key="title" @click="selectedTitle = title"
                :class="{ selected: title == selectedTitle }">
                {{ title }}
            </li>
        </ul>
        <slot>
        </slot>
    </div>
</template>

<script>
import { ref, provide } from "vue";

export default {
    setup(props, { slots }) {
        const tabTitles = ref(slots.default().map((tab) => tab.props.title));
        const selectedTitle = ref(tabTitles.value[0]);

        provide("selectedTitle", selectedTitle)
        return { tabTitles, selectedTitle };
    }
}

</script>
<style scoped>
.tabs {
    max-width: 100%;
    margin: 0 auto;
}

.tabs__header {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
}

.tabs__header li {
    width: 25rem;
    text-align: center;
    padding: 1rem 2rem;
    margin-right: 1rem;
    border-radius: .5rem;
    background-color: var(--color-grey);
    cursor: pointer;
    transition: .4s all ease-out;
}

.tabs__header li.selected {
    background-color: var(--color-accent-2);
    color: var(--color-white);
}
</style>