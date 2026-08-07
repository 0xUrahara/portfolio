---
title: "Setting Up Private Interactsh Server"
date: 2026-08-06
draft: false
---

Complete guide to deploying a private OOB interaction server with Docker, DNS delegation, and Let's Encrypt SSL.

## Overview

This guide walks through setting up a self-hosted Interactsh server for catching blind SSRF, XXE, and XSS callbacks.

## Prerequisites

- VPS with public IP
- Domain with DNS access
- Docker and Docker Compose

## Steps

1. Configure DNS NS records
2. Deploy Interactsh via Docker
3. Obtain SSL certificates
4. Test DNS and HTTP interactions

## Conclusion

A private Interactsh server provides better reliability and avoids rate limits from public servers.