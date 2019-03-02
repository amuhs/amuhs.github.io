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
echo "layout: post" >> $post
echo "title: \"${FULL}\"" >> $post
echo "date: ${post_date} 00:00:00 -6000" >> $post

if [ ! -z "$CAT" ]; then
  echo "categories: [${CAT}]" >> $post
fi

if [ ! -z "$TAG" ]; then
  echo "tags: [${TAG}]" >> $post
fi
echo "---" >> $post
echo "" >> $post

cat <<LOREM  >> $post
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis dictum massa id dapibus. Quisque at feugiat nisl. In vitae orci auctor, blandit est quis, gravida turpis. Ut congue, erat at feugiat vehicula, est nisl bibendum arcu, sed placerat nulla dolor ut libero. Praesent semper eu tortor sed consectetur. Phasellus vel justo semper, vehicula tellus ac, eleifend ex. Etiam eget rhoncus dolor. Maecenas a placerat ipsum, eu faucibus sapien. Quisque condimentum ornare dui quis posuere. Curabitur in egestas nisi.

Proin bibendum volutpat nunc ut elementum. Sed viverra pharetra ante non blandit. Suspendisse convallis elit arcu, a malesuada orci mattis vel. Morbi ut dolor justo. Maecenas erat enim, dapibus at odio sit amet, gravida molestie ante. Donec pulvinar ornare nisi, et euismod nulla vulputate eget. Vestibulum id lacinia velit. Suspendisse convallis hendrerit ultricies. Proin mattis congue iaculis. Quisque et ex quis mi dignissim porttitor sed id ex. Pellentesque luctus, felis convallis pellentesque porttitor, turpis mauris dapibus erat, vel varius libero turpis vel libero. Aenean in rutrum justo, vel semper libero. Cras massa mi, fringilla et urna id, hendrerit mattis dolor. Morbi quis aliquam lacus. Sed vitae dui at nulla efficitur sagittis et ullamcorper nisi. Ut luctus auctor tellus, quis sagittis lorem maximus ac.

Suspendisse et urna cursus, efficitur mauris sit amet, dignissim ex. Suspendisse rutrum gravida dapibus. Etiam non justo auctor, finibus enim sed, dictum ligula. Curabitur egestas augue et blandit aliquam. Vestibulum efficitur ante eu eros scelerisque pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque quis erat sed orci vulputate laoreet vel ac purus. Nulla facilisi. Aliquam erat volutpat. Suspendisse ullamcorper libero in semper bibendum.

Etiam libero lectus, porta et pellentesque at, efficitur sed orci. Nullam suscipit, lorem a ultricies varius, nisi tellus molestie felis, id elementum erat quam sed nisi. Aliquam at sem ante. In fermentum, tellus et mattis condimentum, nulla nisi ultrices justo, eu venenatis nisi enim non leo. Etiam elementum euismod nulla non convallis. Fusce ac purus sapien. Donec fringilla, metus in cursus sodales, magna ipsum cursus massa, at tristique dui lectus vel diam.

Nam dapibus nulla metus, a accumsan justo dignissim ut. Nullam sed lectus est. Maecenas ut neque non lorem semper vestibulum at ac arcu. Maecenas eget elit auctor, facilisis odio vel, fringilla arcu. Curabitur augue magna, volutpat ac dolor in, dapibus finibus elit. Duis eros nunc, elementum et nisi eget, mattis hendrerit dui. Sed tempor, nisl non vestibulum commodo, nulla eros tristique sapien, id sollicitudin nisl est et magna. Curabitur condimentum velit feugiat vehicula tristique. Nunc tincidunt blandit lorem ac ultricies. Aenean eleifend, nulla eu tristique dignissim, arcu felis sagittis justo, sed laoreet risus mauris id augue.
LOREM

echo "[end]"