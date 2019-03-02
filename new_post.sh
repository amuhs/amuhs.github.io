#!/usr/bin/env bash

while getopts s:f:c:t: option
do
  case "${option}" in
    s) SHORT=${OPTARG};;
    f) FULL=${OPTARG};;
    c) CAT=${OPTARG};;
    t) TAG=${OPTARG};;
  esac
done

cwd=$(pwd)
post_dir="${cwd}/_posts/"
post_date=`date +"%Y-%m-%d"`
short_fix="$( echo "${SHORT}" | sed 's/[[:space:]]/-/g')"
post="${post_dir}${post_date}-${short_fix}.md"

if [ -f $post ]; then
  echo "A post already exists with that name."
  exit 0
else
  echo "Creating new post file..."
  touch $post
fi

echo "---" >> $post
echo "layout: default" >> $post
echo "title: ${FULL}" >> $post
echo "date: ${post_date} 00:00:00 -6000"

if [ -z "$CAT" ]; then
  echo "\ncategories: [${CAT}]"
fi

if [ -z "$TAG" ]; then
  echo "tags: [${TAG}]"
fi
echo "---" >> $post

echo "[end]"