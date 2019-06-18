#!/usr/bin/env bash

while getopts s:f:c:t:?h option
do
  case "${option}" in
    s) SHORT=${OPTARG};;
    f) FULL=${OPTARG};;
    c) CAT=${OPTARG};;
    t) TAG=${OPTARG};;
    h|?) HELP=true
  esac
done

if [ "$HELP" = true ]; then
  echo ""
  echo "NAME"
  echo "     new_post -- creates a markdown file for a new post"
  echo ""
  echo "SYNOPSIS"
  echo "     new_post.sh [-h]-s \"title_for_file\" -f \"full_post_title\" [-c \"category1, category2, categoryN\"] [-t \"tag1, tag2, tagN\"]"
  echo ""
  echo "DESCRIPTION"
  echo "     The new_post script will create a new md (markdown) file in the _posts directory using the supplied short and full post titles."
  echo ""
  echo "     By defaut, a file is created using the current date and time, and generates the appropriate front matter. Categories and tags "
  echo "     may also be given at script run so they may be added to the front matter as well. Some Lorem Ipsum text is also added to the "
  echo "     post body of the file."
  echo ""
  echo "     The following options are available:"
  echo ""
  echo "     -h      Display this infomation and exit"
  echo ""
  echo "     -s      The shortened title of the post to be used in the file extention"
  echo ""
  echo "     -f      The complete text of the post"
  echo ""
  echo "     -c      Add the following categories to the post"
  echo ""
  echo "     -t      Add the following tags to the post"
  echo ""
  exit 0
fi

# Getting some logging (echoing some stuff) going so I can debug if something goes wrong
echo "Found a short title of: ${SHORT}"
echo "Found a full title of:  ${FULL}"
echo "Categories found:       ${CAT}"
echo "Tags found:             ${TAG}"


cwd=$(pwd)
post_dir="${cwd}/_posts/"
post_date=`date +"%Y-%m-%d"`
short_fix="$( echo "${SHORT}" | sed 's/[[:space:]]/-/g')"
post="${post_dir}${post_date}-${short_fix}.md"

echo "Checking existing post titles..."
if [ -f $post ]; then
  echo "A post already exists with that name."
  exit 0
else
  echo "No post exists with that title."
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