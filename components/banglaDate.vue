<template>
</template>
<script setup>
import { onMounted } from 'vue';

function replaceWithBangla(text) {
  const banglaDigits = {
    "0": "০",
    "1": "১",
    "2": "২",
    "3": "৩",
    "4": "৪",
    "5": "৫",
    "6": "৬",
    "7": "৭",
    "8": "৮",
    "9": "৯",
  };

  const regexDigits = /\d/g;
  const regexTimeUnits = /\b(minutes?|hours?|days?|months?|years?)\b/gi;

  text = text.replace(regexDigits, (digit) => banglaDigits[digit]);

  text = text.replace(regexTimeUnits, (unit) => {
    switch (unit.toLowerCase()) {
      case "minute":
      case "minutes":
        return "মিনিট";
      case "hour":
      case "hours":
        return "ঘন্টা";
      case "day":
      case "days":
        return "দিন";
      case "month":
      case "months":
        return "মাস";
      case "year":
      case "years":
        return "বছর";
      default:
        return unit;
    }
  });

  return text;
}

async function banglaTimeWrapper() {
  const publishedTimes = document.querySelectorAll(".publishedTime");

  for (const time of publishedTimes) {
    const originalText = time.textContent.trim();
    const textArray = originalText.split(",");

    if (textArray[0]) {
      const convertedText = await new Promise((resolve) => {
        setTimeout(() => resolve(replaceWithBangla(textArray[0].trim())), 10);
      });
      time.textContent = convertedText + " আগে";
    }
  }
}

async function caption() {
  const newsCaption = document.querySelectorAll(".newsCaption");
  newsCaption.forEach(caption => {
    console.log(caption);

  })
}

onMounted(async () => {
  await banglaTimeWrapper();
  await caption();
});

</script>