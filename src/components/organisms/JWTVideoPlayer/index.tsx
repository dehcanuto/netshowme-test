import { Fragment } from 'react';
import { BitmovinPlayer } from 'bitmovin-player-react';
import { PlayerConfig } from 'bitmovin-player';
import { ControlBar, PlaybackToggleOverlay, SeekBar, UIContainer, UIVariant } from 'bitmovin-player-ui';

const playerConfig: PlayerConfig = {
  key: 'c4832661-f920-4b4a-a567-75bb28997597',
  playback: {
    muted: true,
    autoplay: true,
  },
};

const uiVariantsFactory = (): UIVariant[] => [
  {
    ui: new UIContainer({
      components: [
        new PlaybackToggleOverlay(),
        new ControlBar({
          components: [new SeekBar()],
          hidden: false,
        }),
      ],
    }),
    condition: context => context.isFullscreen,
  },
  {
    ui: new UIContainer({
      components: [new PlaybackToggleOverlay()],
    }),
    condition: context => !context.isFullscreen,
  },
];

export const JWTVideoPlayer = ({ hls_path }: { hls_path: string }) => {
  return (
    <Fragment>
      <div className="relative max-w-[924px] h-[520px] mx-auto">
        <BitmovinPlayer
          source={{ hls: hls_path }}
          config={playerConfig}
          customUi={{
            variantsFactory: uiVariantsFactory,
          }}
        />
      </div>
    </Fragment>
  );
}