<script setup lang="ts">
import { transformerNotationDiff } from "@shikijs/transformers";
import { codeToHtml } from "shiki";

const code = `{
  "caller": "web",
  "callee": "lb_controller",
  "event_id": "27",
  "error_code": 200,
  "error_msg": "",
  "response_data": [{
    "vs_status": "enable",
    "vs_name": "vs_nrs-nginx-core_https443_MRH-PRD-CORE",
    "partition": "RH-Base",
    "dc_chn": "sk",
    "lb_chn": "f5",
    "proto": "https",
    "type": "standard",
    "ip": "111.222.123.122",
    "port": "443",
    "http_profile": "http_XFF",
    "ssl_cert": "cc.com.cert",
    "redirect_https": "0",
    "name": "nrs-nginx-core_https443_MRH-PRD-CORE",
    "status": "enable",
    "member": [
      { "ip": "111.222.123.123", "port": "80", "status": "enable" },
      { "ip": "111.111.124.124", "port": "80", "status": "enable" }
    ],
    "lb_method": "round",
    "persistence": "cookie",
    "health_check": "/Common/tcp",
    "rule": { "name": "/Common/rule_redirectHTTPS", "content": "" }
  }]
}`;
const html = ref("");

onMounted(async () => {
  html.value = await codeToHtml(code, {
    lang: "json",
    theme: "one-dark-pro",
    transformers: [transformerNotationDiff()],
  });
});
</script>

<template>
  <div v-html="html"></div>
</template>
